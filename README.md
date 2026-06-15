# Yag Project

חנות אונליין מבוססת React + Node, עם ממשק משתמש בעברית וניהול מוצרים למנהל.

## מה כולל הפרויקט
- דף הבית של החנות
- חיפוש מוצר
- קטגוריות
- דף מוצר בודד
- סל קניות
- כניסה / הרשמה
- דף ניהול מוצרים למנהל
- אימות JWT וניהול משתמשים ב־MongoDB

## תיעוד חזותי
הנכסים נמצאים ב־`client/docs/`:
- תמונות: `client/docs/images/`
- סרטון הדגמה: `client/docs/videw.mp4`

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

### סרטון הדגמה
[צפייה בסרטון ההדגמה](client/docs/videw.mp4)

## התקנה והרצה
```bash
cd client
npm install
npm start
```

היישום יפעל ב־`http://localhost:3000`.

## מבנה הפרויקט
- `client/` — קוד הלקוח
  - `client/src/` — קוד React
  - `client/src/components/` — רכיבים מרכזיים
  - `client/public/` — קבצים סטטיים של הלקוח
  - `client/docs/` — תמונות וסרטון תיעוד
- `server/` — קוד השרת

## עקרונות תמיכה ושיפור
- תמונות ב־`client/docs/images/` מיועדות ל־README ולתיעוד.
- אם תרצי להשתמש בתמונות בתוך האפליקציה, עדיף לשים אותן ב־`client/public/images/`.
- הנתיבים ב־React נשארו באנגלית, אך הממשק מוצג בעברית.
