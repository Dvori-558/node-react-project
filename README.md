# Yag Project — חנות אונליין ✨

[![License](https://img.shields.io/github/license/Dvori-558/node-react-project)](https://github.com/Dvori-558/node-react-project)
[![Last commit](https://img.shields.io/github/last-commit/Dvori-558/node-react-project)](https://github.com/Dvori-558/node-react-project/commits/master)
[![Repo size](https://img.shields.io/github/repo-size/Dvori-558/node-react-project)](https://github.com/Dvori-558/node-react-project)

![חנות Yag](client/docs/images/home1.png)

חנות אונליין מבוססת React + Node עם ממשק משתמש בעברית, מערכת הרשמה/כניסה וסל קניות — ממשק ניהול מוצרים למנהל.

תוכן מהיר:

- ⭐ **תכונות**
- 🔎 חיפוש מוצרים
- 🧾 קטגוריות וסינון
- 🛒 סל קניות + חיבור לממשק תשלום מדומה
- 🔐 אימות JWT וניהול משתמשים ב־MongoDB

**תוכן העניינים**

- [תכונות](#תכונות)
- [טכנולוגיות](#טכנולוגיות)
- [התקנה והרצה](#התקנה-והרצה)
- [תיעוד חזותי](#תיעוד-חזותי)
- [איך להכין GIF קצר](#איך-להכין-gif-קצר)
- [תרומה ויצירת קשר](#תרומה-ויצירת-קשר)

## תכונות

- דף בית דינמי ומותאם
- דף מוצר בודד עם פרטים מלאים
- דף ניהול מוצרים (CRUD) עבור מנהל
- מערכת הרשמה וכניסה

## טכנולוגיות

- Frontend: React
- Backend: Node.js + Express
- Database: MongoDB
- State: Redux Toolkit

## התקנה והרצה

הרצת הלקוח:

```bash
cd client
npm install
npm start
```

השרת:

```bash
cd server
npm install
node server.js
```

היישום יפעל ב־`http://localhost:3000`.

## תיעוד חזותי
הנכסים נמצאים ב־`client/docs/images/` (תמונות מופיעות כאן בתוך ה־README):

> הערה: קובץ הווידאו המקורי גדול מדי ל־GitHub ולכן אינו מאוחסן בריפוזיטורי — מומלץ להעלות אותו ל־YouTube או ל־Google Drive ולצרף קישור.


### הדגמות GIF
להלן GIFים קצרים שמציגים זרימות מרכזיות באפליקציה (לחצי על התמונה להגדלה):

- **Home (דף הבית)**

	![Home Demo](client/docs/images/demo-home.gif)

- **Category (קטגוריות)**

	![Category Demo](client/docs/images/demo-category.gif)

- **Login (התחברות/רישום)**

	![Login Demo](client/docs/images/demo-login.gif)


### צילומי מסך

#### עמוד הבית
![דף הבית 1](client/docs/images/home1.png)
![דף הבית 2](client/docs/images/home2.png)

#### חיפוש וקטגוריות
![חיפוש מוצר](client/docs/images/search.png)
![קטגוריות](client/docs/images/category.png)

#### כניסה ורישום
![כניסה](client/docs/images/login.png)
![רישום](client/docs/images/register.png)

#### סל קניות
![סל קניות 1](client/docs/images/basket1.png)
![סל קניות 2](client/docs/images/basket2.png)

#### ניהול מוצרים ומוצר בודד
![ניהול מוצרים](client/docs/images/edit.png)
![הוספת מוצר](client/docs/images/add-product.png)
![עמוד מוצר בודד](client/docs/images/signle.png)


## תרומה ויצירת קשר

מעוניינת/ן לעזור או לדווח על בעיה? פתח/י Issue או שלחי כאן הודעה.

---

*עוד שיפורים אפשריים:* הוספת GIF מקומי, קישור ל־YouTube, וקישורים ל־CI אם יופעלו.
