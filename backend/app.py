from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient('mongodb://mongo:27017/')
db = client['restaurant']
dishes_collection = db['dishes']

@app.route('/api/menu', methods=['GET'])
def get_menu():
    dishes = list(dishes_collection.find())
    for dish in dishes:
        dish['id'] = str(dish['_id'])
        del dish['_id']
    return jsonify(dishes)

@app.route('/api/menu', methods=['POST'])
def create_dish():
    data = request.get_json()
    new_dish = {
        'name': data['name'],
        'price': data['price'],
        'description': data['description']
    }
    result = dishes_collection.insert_one(new_dish)
    new_dish['id'] = str(result.inserted_id)
    if '_id' in new_dish:
        del new_dish['_id']
    return jsonify(new_dish), 201

@app.route('/api/menu/<dish_id>', methods=['DELETE'])
def delete_dish(dish_id):
    try:
        dishes_collection.delete_one({'_id': ObjectId(dish_id)})
        return '', 204
    except:
        return jsonify({'error': 'Invalid dish ID'}), 400

if __name__ == '__main__':
    app.run(debug=True)
