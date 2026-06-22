from flask import Flask, render_template, request
import random
from tarot_data import tarot_cards

app = Flask(__name__)

# ===============================
# TODAY'S FORTUNE DATA
# ===============================

today_fortunes = [

    {
        "love": "A meaningful connection may deepen today.",
        "career": "A new opportunity could appear unexpectedly.",
        "health": "Take time to recharge your energy.",
        "lucky_color": "Blue",
        "lucky_number": "7"
    },

    {
        "love": "Trust your heart and communicate openly.",
        "career": "Your hard work is beginning to show results.",
        "health": "Balance work and rest carefully.",
        "lucky_color": "Purple",
        "lucky_number": "3"
    },

    {
        "love": "A pleasant surprise may brighten your day.",
        "career": "Stay focused on your long-term goals.",
        "health": "Hydration and rest are important today.",
        "lucky_color": "Gold",
        "lucky_number": "9"
    }

]

# ===============================
# MONTHLY FORTUNE DATA
# ===============================

monthly_data = {
    "month": "June",
    "career": "Growth and recognition are approaching.",
    "love": "Focus on meaningful connections.",
    "finance": "A stable financial period lies ahead.",
    "advice": "Trust the process and stay patient."
}

# ===============================
# ZODIAC DATA
# ===============================

zodiac_data = {

    "Aries": "A bold decision will bring positive change.",
    "Taurus": "Patience will reward you this month.",
    "Gemini": "Communication opens new opportunities.",
    "Cancer": "Trust your intuition and emotions.",
    "Leo": "Your confidence attracts success.",
    "Virgo": "Focus on personal growth and learning.",
    "Libra": "Balance brings peace and clarity.",
    "Scorpio": "Transformation is approaching.",
    "Sagittarius": "Adventure and new experiences await.",
    "Capricorn": "Discipline will help achieve your goals.",
    "Aquarius": "Innovation and creativity shine.",
    "Pisces": "Follow your dreams fearlessly."

}

# ===============================
# LOGIN PAGE
# ===============================

@app.route("/")
def login():
    return render_template("login.html")

# ===============================
# DASHBOARD
# ===============================

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

# ===============================
# TAROT KNOWLEDGE
# ===============================

@app.route("/knowledge")
def knowledge():

    return render_template(
        "knowledge.html",
        cards=tarot_cards
    )

# ===============================
# DRAW TAROT CARD
# ===============================

@app.route("/draw")
def draw():

    selected_card = random.choice(tarot_cards)

    return render_template(
        "result.html",
        card=selected_card
    )

# ===============================
# TODAY'S FORTUNE
# ===============================

@app.route("/today")
def today():

    fortune = random.choice(today_fortunes)

    return render_template(
        "today_fortune.html",
        fortune=fortune
    )

# ===============================
# MONTHLY FORTUNE
# ===============================

@app.route("/monthly")
def monthly():

    return render_template(
        "monthly_fortune.html",
        monthly=monthly_data
    )

# ===============================
# ZODIAC PAGE
# ===============================

@app.route("/zodiac", methods=["GET", "POST"])
def zodiac():

    result = None

    if request.method == "POST":

        sign = request.form.get("sign")

        result = zodiac_data.get(
            sign,
            "The stars are quiet today."
        )

    return render_template(
        "zodiac.html",
        zodiacs=zodiac_data.keys(),
        result=result
    )

# ===============================
# RUN FLASK APP
# ===============================

if __name__ == "__main__":
    app.run(
        debug=True,
        port=5001
    )