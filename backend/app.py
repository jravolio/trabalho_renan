from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

dishes = [
    {
        'id': 1,
        'name': 'Filé Mignon',
        'price': 1.99,
        'description': 'Carne de luxo com cogumelos e molho barbecue'
    },
    {
        'id': 2,
        'name': 'Salmão Grelhado',
        'price': 5.99,
        'description': 'Salmão fresco grelhado com ervas finas'
    },
    {
        'id': 3,
        'name': 'Risoto de Funghi',
        'price': 10.99,
        'description': 'Risoto cremoso com mix de cogumelos'
    }
]

@app.route('/api/menu', methods=['GET'])
def get_menu():
    return jsonify(dishes)

@app.route('/api/menu', methods=['POST'])
def create_dish():
    data = request.get_json()
    print(data)
    new_dish = {
        'id': len(dishes) + 1,
        'name': data['name'],
        'price': data['price'],
        'description': data['description']
    }
    dishes.append(new_dish)
    return jsonify(new_dish), 201


if __name__ == '__main__':
    app.run(debug=True)
