from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/count', methods=['POST'])
def count():
    data = request.get_json()
    paragraph = data.get('text', '').strip()
    word_count = len(paragraph.split())
    char_count = len(paragraph.replace(' ', ''))
    return jsonify({'word_count': word_count, 'char_count': char_count})


if __name__ == '__main__':
    app.run(debug=True)
