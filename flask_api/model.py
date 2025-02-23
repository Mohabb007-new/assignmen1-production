from flask import Flask,request,jsonify
import numpy as np
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
analyzer = SentimentIntensityAnalyzer()

app=Flask(__name__)
@app.route('/predict',methods=["POST"])
def predict():
        try:
                data=request.get_json()
                vs = analyzer.polarity_scores(data['text'])
                if vs['compound'] >= 0.05:
                        sentiment = "positive"
                elif vs['compound'] <= -0.05:
                        sentiment = "negative"
                else:
                        sentiment = "neutral"
                
                return jsonify({ "sentiment": sentiment })
        except Exception as e:
                return jsonify(e)
if __name__ == '__main__':
    app.run(debug=True)

