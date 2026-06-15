# Yag Project Client

ריפוזיטורי ה־`client` של פרויקט יג — חנות מקוונת בעברית עם ממשק React, PrimeReact ו־Redux.

## מה יש כאן
- דף הבית של החנות
- חיפוש מוצר
- קטגוריות נבחרות
- דף מוצר בודד
- סל קניות
- כניסה / הרשמה
- דף ניהול מוצרים למנהל

## תמונות וסרטון תצוגה
כל הצילומים נמצאים ב־`client/docs/images/`, והווידאו ב־`client/docs/videw.mp4`.

### צילומי מסך
![דף הבית 1](client/docs/images/home1.png)
![דף הבית 2](client/docs/images/home2.png)

![חיפוש מוצר](client/docs/images/search.png)
![קטגוריות](client/docs/images/category.png)

![כניסה](client/docs/images/login.png)
![רישום](client/docs/images/register.png)

![סל קניות 1](client/docs/images/basket1.png)
![סל קניות 2](client/docs/images/basket2.png)

![ניהול מוצרים](client/docs/images/edit.png)
![הוספת מוצר](client/docs/images/add-product.png)

![עמוד מוצר בודד](client/docs/images/signle.png)

### וידאו תצוגה
<video controls width="720" src="client/docs/videw.mp4">
  סרטון ההדגמה אינו נתמך על ידי דפדפן זה.
</video>

## התקנה והרצה
```bash
cd client
npm install
npm start
```

היישום יפעל ב־`http://localhost:3000`.

## מבנה קבצים חשוב
- `client/src/` — קוד React של הלקוח
- `client/src/components/` — רכיבים מרכזיים
- `client/public/` — קבצים סטטיים של הלקוח
- `client/docs/images/` — צילומי מסך לתיעוד
- `client/docs/videw.mp4` — סרטון הדגמה

## שים לב
- התמונות ב־`client/docs/images/` מיועדות לתיעוד ול־README.
- אם את רוצה תמונות שישמשו בתוך האפליקציה עצמה, עדיף לשים אותן ב־`client/public/images/`.
- הקישורים ב־React נשארו באנגלית, אך הממשק מציג עברית.

## למה זה יפה ומקצועי
- מציג את האפליקציה באופן חזותי וקריא
- מחלק דפי מסך לפי קטעים ברורים
- כולל סרטון הדגמה מקומי
- מראה איפה לשים נכסים ואיך להריץ
