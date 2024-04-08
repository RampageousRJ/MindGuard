from flask import Flask,request,jsonify
from flask_cors import cross_origin
from tensorflow import keras
import pickle

app = Flask(__name__)

@app.route('/',methods=['POST'])
@cross_origin()
def hello_world():
    payload = request.get_json(force=True)
    input = payload['input']
    model = keras.models.load_model('model.h5')
    nlp = pickle.load(open('nlp.pkl','rb'))
    vectorizer = pickle.load(open('vectorizer.pkl','rb'))
    doc = nlp(input)
    lemmatized_tokens = [token.lemma_.lower() for token in doc if token.pos_ != 'PUNCT' and not token.is_stop]
    preprocessed = ' '.join(token for token in lemmatized_tokens).strip()
    vector = vectorizer.transform([preprocessed])
    prediction = model.predict(vector)
    if prediction[0][0] > 0.5:
        return jsonify({'output':'Depressed'})
    else:
        return jsonify({'output':'Not Depressed'})

if __name__ == '__main__':
    app.run(debug=1)