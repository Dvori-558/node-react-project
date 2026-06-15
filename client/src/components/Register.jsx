import React, { useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Password } from 'primereact/password';
import { InputMask } from "primereact/inputmask";
import { Button } from 'primereact/button';
import Axios from 'axios';
import { Toast } from 'primereact/toast';
import { useNavigate } from "react-router-dom"
import { Dialog } from 'primereact/dialog';
import Home from './Home';


const Register = () => {

  const navigate = useNavigate()

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(true);

  const message = useRef(null);
  const [disabled, setDisabled] = useState(false);

  const load = async (e) => {
    e.preventDefault()
    setDisabled(true)
    setLoading(true);
    const newUser = { userName, password, firstName, lastName, phone, email, address }
    try {
      const { data } = await Axios.post("http://localhost:1234/api/users/register", newUser)
      message.current.show({ severity: "success", summary: 'הצלחה', detail: 'נרשמת בהצלחה', life: 1500 })
      setTimeout(() => {
        console.log(111);
        setVisible(false)
        navigate("/login")
      }, 1000);

    } catch (error) {
      if (error.status === 409)
        message.current.show({ severity: "error", summary: 'שגיאה', detail: 'שם המשתמש תפוס. בחר שם משתמש אחר', life: 3000 })
      else
        message.current.show({ severity: "error", summary: 'שגיאה', detail: 'פרטי משתמש לא תקינים', life: 3000 })
      setDisabled(false)
    }
    setLoading(false)
  };

  return (
    <>
      <Home />
      <Dialog className='p-9 card' visible={visible} onHide={() => { if (!visible) return; setVisible(false); navigate("/"); }} style={{ border: "solid 5px var(--indigo-300)" }}>
        <form onSubmit={load} className='px-4'>
          <h1 className="flex justify-content-center" >הרשמה</h1>
          <div className="card flex justify-content-center" style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
            <FloatLabel>
              <InputText id="username" value={userName} onChange={(e) => setUserName(e.target.value)} required />
              <label htmlFor="username">שם משתמש</label>
            </FloatLabel>

            <FloatLabel >
              <Password inputStyle={{ width: "224px" }} inputId="password" value={password} onChange={(e) => setPassword(e.target.value)} toggleMask required />
              <label htmlFor="password">סיסמה</label>
            </FloatLabel>

            <FloatLabel>
              <InputText id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
              <label htmlFor="firstName">שם פרטי</label>
            </FloatLabel>

            <FloatLabel>
              <InputText id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
              <label htmlFor="lastName">שם משפחה</label>
            </FloatLabel>

            <FloatLabel>
              <InputMask id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} mask="999-999-9999" required />
              <label htmlFor="phone">טלפון</label>
            </FloatLabel>

            <FloatLabel>
              <InputText type='email' id="email" value={email} onChange={(e) => setEmail(e.target.value)} keyfilter="email" />
              <label htmlFor="email">אימייל</label>
            </FloatLabel>

            <FloatLabel>
              <InputText id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
              <label htmlFor="address">כתובת</label>
            </FloatLabel>

            <Toast ref={message} position='top-center' />
            <div className="w-full flex justify-content-between" style={{ display: "flex", justifyContent: "center" }}>
              <Button type='submit' label="הרשמה" icon="pi pi-check" autoFocus loading={loading} disabled={disabled} />
              <Button onClick={() => navigate("/")} label="ביטול" icon="pi pi-times" className="p-button-text" />
            </div>
          </div>
        </form>
      </Dialog>
    </>
  )
}

export default Register

