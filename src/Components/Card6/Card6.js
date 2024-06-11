import React, { useState } from 'react';
import Drag from '../Drag/Drag';
import Deliverydetails from '../Deliverydetails/Deliverydetails';
import post from '../../assets/post.svg';
import Stepper from '../../Components/Stepper/HorizontalStepper';
import logo from '../../assets/zippyy_logo.svg';
import RadioButton from '../../Components/RadioButton/RadioButton'
function Card6() {
    const [url, setUrl] = useState('upload url');
    const [yourbrand, setyourbrand] = useState('Enter brand name');
    const [brandurl, setbrandurl] = useState('Enter policy URL here');
    const [number, setnumber] = useState('Enter support number');
    const [mail, setmail] = useState('abcd@gmail.com');
    const [color, setcolor] = useState('Choose color');
    const [selectcolor, setselectcolor] = useState('Choose color');
    const [enterbrand, setenterbrand] = useState('i.e yourbrand/tracking')
    const handleChange = (event) => {
        setUrl(event.target.value);
    };

    return (
        <div style={{ backgroundColor: 'white', width: '90%', height: 'auto', marginTop: '130px', marginLeft: '40px', borderRadius: '16px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', flexShrink: '3', flexGrow: '2' }}>
                <div style={{ width: '100%' }}>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '42px', marginTop: '42px' }}>
                            <div >
                                <Drag />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Poppins', marginLeft: '20px', width: '100%' }}>
                                <p style={{ fontWeight: '400', fontSize: '14px', lineHeight: '21px', marginBottom: '8px' }}>
                                    Upload your brand logo*
                                </p>
                                <button style={{ width: '104px', height: '40px', border: '1px solid #121114', borderRadius: '6px', padding: '9px 12px 9px 12px', marginBottom: '8px' }}>
                                    Upload
                                </button>
                                <p style={{ marginBottom: '10px', fontWeight: '400', fontSize: '8px', lineHeight: '12px', color: '#5F5A6B' }}>
                                    120 X 120 px Max file size:
                                </p>
                                <p style={{ fontWeight: '400', fontSize: '14px', lineHeight: '21px', marginBottom: '8px' }}>Upload company URL</p>
                                <input
                                    id="url-input"
                                    type="url"
                                    value={url}
                                    onChange={handleChange}
                                    placeholder="upload url"
                                    style={{
                                        padding: '9px 12px 9px 12px',
                                        fontSize: '14px',
                                        borderRadius: '6px',
                                        border: '1px solid #D9D9D9',
                                        width: '90%',
                                        height: '40px',
                                        color: '#9EA3A2',
                                        lineHeight: '21px',
                                        fontWeight: '300'

                                    }}

                                />
                                <p style={{ fontWeight: '400', fontSize: '8px', lineHeight: '12px', color: '#5F5A6B', marginTop: '5px' }}>
                                    Link used when the Logo Image is clicked.
                                </p>
                            </div>
                        </div>
                        <div style={{ marginLeft: '42px', marginTop: '20px' }}>
                            <p style={{ fontWeight: '400', fontSize: '14px', lineHeight: '21px', color: '#121114', marginBottom: '5px' }}>Enter brand name*</p>
                            <input
                                id="enterbrand"
                                type="text"
                                value={yourbrand}
                                onChange={(e) => setyourbrand(e.target.value)}
                                required
                                placeholder="Enter brand name"
                                style={{
                                    padding: '9px',
                                    fontSize: '14px',
                                    borderRadius: '6px',
                                    border: '1px solid #D9D9D9',
                                    width: '95%',
                                    height: '39px',
                                    color: '#9A96A1',
                                    lineHeight: '21px',
                                    fontWeight: '300'

                                }} />
                        </div>
                        <div style={{ width: '95%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ width: '55%', display: 'flex', flexDirection: 'column', marginleft: '42px' }}>
                                <div>
                                    <p style={{ marginLeft: '42px', fontWeight: '400', fontSize: '14px', lineHeight: '21px', width: '202px', height: '21px', color: '#121114', marginTop: '20px', marginBottom: '5px' }}>Choose background color</p>
                                </div>
                                <div style={{ marginLeft: '42px', display: 'flex', flexDirection: 'row' }}>

                                    <div style={{ width: '20%', height: '40px', borderRadius: '6px', backgroundColor: '#D54029' }}>

                                    </div>
                                    <input
                                        id="selectcolor"
                                        type="text"
                                        value={selectcolor}
                                        onChange={(e) => setselectcolor(e.target.value)}
                                        required
                                        placeholder="Choose color"
                                        style={{
                                            padding: '9px',
                                            fontSize: '14px',
                                            borderRadius: '6px',
                                            border: '1px solid #D9D9D9',
                                            width: '100%',
                                            height: '39px',
                                            color: '#9A96A1',
                                            lineHeight: '21px',
                                            fontWeight: '300',
                                            gap: '10px',
                                            marginLeft: '10px',

                                        }} />
                                </div>

                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', width: '50%' }}>
                                <div>
                                    <p style={{ marginLeft: '10px', fontWeight: '400', fontSize: '14px', lineHeight: '21px', width: '202px', height: '21px', color: '#121114', marginTop: '20px', marginBottom: '5px' }}>Color</p>
                                </div>
                                <div style={{ marginLeft: '10px', display: 'flex' }}>

                                    <div style={{ width: '20%', height: '40px', borderRadius: '6px', backgroundColor: '#D54029' }}></div>
                                    <input
                                        id="enterbrand"
                                        type="text"
                                        value={color}
                                        onChange={(e) => setcolor(e.target.value)}
                                        required
                                        placeholder="Enter brand name"
                                        style={{
                                            padding: '9px',
                                            fontSize: '14px',
                                            borderRadius: '6px',
                                            border: '1px solid #D9D9D9',
                                            width: '100%',
                                            height: '39px',
                                            color: '#9A96A1',
                                            lineHeight: '21px',
                                            fontWeight: '300',
                                            gap: '10px',
                                            marginLeft: '10px'
                                        }} />
                                </div>
                            </div>
                        </div>
                        <div style={{ marginLeft: '42px', marginTop: '20px' }}>
                            <p style={{ fontWeight: '400', fontSize: '14px', lineHeight: '21px', color: '#121114', marginBottom: '5px' }}>Add sub-domain for your tracking page</p>
                            <p style={{ fontWeight: '400', fontSize: '12px', lineHeight: '21px', color: '#5F5A6B', marginBottom: '5px' }}>Enter your brand/company name below for brand recognization</p>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <input
                                    id="enterbrand"
                                    type="text"
                                    value={enterbrand}
                                    onChange={(e) => setenterbrand(e.target.value)}
                                    required
                                    placeholder="i.e yourbrand/tracking"
                                    style={{
                                        padding: '9px',
                                        fontSize: '14px',
                                        borderRadius: '6px 0px 0px 6px',
                                        border: '1px solid #D9D9D9',
                                        width: '70%',
                                        height: '40px',
                                        color: '#9A96A1',
                                        lineHeight: '21px',
                                        fontWeight: '300',
                                        gap: '10px'

                                    }} />

                                <div style={{ border: '1px solid #D2D1D6', width: '25%', height: '40px', backgroundColor: '#FBEAE7', borderRadius: '0px 6px 6px 0px', fontWeight: '300', fontSize: '16px', lineHeight: '26px' }}>
                                    <p style={{ margin: '8px', color: '#9A96A1', fontSize: '16px', fontWeight: '300', lineHeight: '26px', paddingLeft: '10px' }}>Zippyy.ai</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '42px', marginTop: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div >
                                <Drag />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Poppins', marginLeft: '20px', width: '100%' }}>
                                <p style={{ fontWeight: '400', fontSize: '14px', lineHeight: '21px', marginBottom: '8px' }}>
                                    Upload your tracking page banner
                                </p>
                                <button style={{ backgroundColor: 'FFFFFF', width: '104px', height: '40px', border: '1px solid #121114', borderRadius: '6px', padding: '9px 12px', marginBottom: '8px' }}>
                                    Upload
                                </button>
                                <p style={{ marginBottom: '10px', fontWeight: '400', fontSize: '8px', lineHeight: '12px', color: '#5F5A6B' }}>
                                    960 X 240 px
                                </p>
                                <p style={{ fontWeight: '400', fontSize: '14px', lineHeight: '21px', marginBottom: '8px' }}>Upload url for banner</p>
                                <input
                                    id="url-input"
                                    type="url"
                                    value={url}
                                    onChange={handleChange}
                                    placeholder="upload url"
                                    style={{
                                        padding: '8px',
                                        fontSize: '14px',
                                        borderRadius: '6px',
                                        border: '1px solid #D9D9D9',
                                        width: '90%',
                                        height: '40px',
                                        color: '#9EA3A2',
                                        lineHeight: '21px',
                                        fontWeight: '300',

                                    }}

                                />
                                <p style={{ fontWeight: '400', fontSize: '8px', lineHeight: '12px', color: '#5F5A6B', marginTop: '5px' }}>
                                    Link used when the Logo Image is clicked.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div style={{ marginLeft: '42px' }}>
                        <div style={{ marginTop: '20px' }}>
                            <p style={{ fontWeight: '400', fontSize: '14px', lineHeight: '21px', color: '#121114', marginBottom: '5px' }}>Privacy policy</p>
                            <p style={{ fontWeight: '400', fontSize: '12px', lineHeight: '21px', color: '#5F5A6B', marginBottom: '5px' }}>Add a link to your privacy policy here to inform buyers about your guidelines.</p>
                            <input
                                id="enterbrandUrl"
                                type="url"
                                value={brandurl}
                                onChange={(e) => setbrandurl(e.target.value)}
                                required
                                placeholder="Enter policy URL here"
                                style={{
                                    padding: '9px',
                                    fontSize: '14px',
                                    borderRadius: '6px',
                                    border: '1px solid #D9D9D9',
                                    width: '95%',
                                    height: '39px',
                                    color: '#9A96A1',
                                    lineHeight: '21px',
                                    fontWeight: '300',
                                    gap: '10px',
                                }} />
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <p style={{ fontWeight: '400', fontSize: '14px', lineHeight: '21px', color: '#121114', marginBottom: '5px' }}>Support contact number</p>
                            <p style={{ fontWeight: '400', fontSize: '12px', lineHeight: '21px', color: '#5F5A6B', marginBottom: '5px' }}>Include a phone number for customers to contact your customer service team.</p>
                            <input
                                id="enternumber"
                                type="number"
                                value={number}
                                onChange={(e) => setnumber(e.target.value)}
                                required
                                placeholder="Enter support number"
                                style={{
                                    padding: '9px',
                                    fontSize: '14px',
                                    borderRadius: '6px',
                                    border: '1px solid #D9D9D9',
                                    width: '95%',
                                    height: '39px',
                                    color: '#9A96A1',
                                    lineHeight: '21px',
                                    fontWeight: '300',
                                    gap: '10px'

                                }} />
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <p style={{ fontWeight: '400', fontSize: '14px', lineHeight: '21px', color: '#121114', marginBottom: '5px' }}>Support email address</p>
                            <p style={{ fontWeight: '400', fontSize: '12px', lineHeight: '21px', color: '#5F5A6B', marginBottom: '5px' }}>Include an email address for customers to contact your customer service team.</p>
                            <input
                                id="enteremail"
                                type="mail"
                                value={mail}
                                onChange={(e) => setmail(e.target.value)}
                                required
                                placeholder="Enter policy URL here"
                                style={{
                                    padding: '9px',
                                    fontSize: '14px',
                                    borderRadius: '6px',
                                    border: '1px solid #D9D9D9',
                                    width: '95%',
                                    height: '39px',
                                    color: '#9A96A1',
                                    lineHeight: '21px',
                                    fontWeight: '300',
                                    gap: '10px'

                                }} />
                        </div>
                    </div>
                </div>
                <div style={{ width: '50%' }}>
                    <div style={{ paddingLeft: '20px' }}><RadioButton /></div>

                    <div style={{ width: '90%', padding: '30px', marginLeft: '20px', border: '1px solid #D9D9D9', borderRadius: '16px' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <p style={{ color: "#5F5A6B", fontFamily: 'Poppins', fontWeight: '700', fontSize: '16px', lineHeight: '24px' }}>
                                Order id : <span style={{ fontWeight: '400' }}>12123345ASX</span>
                            </p>
                            <p style={{ color: "#5F5A6B", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>
                                Last updated: <span style={{ color: 'black', fontWeight: '500' }}>May 16, 01:00pm UTC </span>
                            </p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <img style={{ marginTop: '100px' }} src={logo} alt="Nologo" />
                        </div>
                        <Stepper />
                        <div style={{ color: "#9EA3A2", fontFamily: 'Poppins', fontWeight: '400', fontSize: '14px', lineHeight: '21px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '40px' }}>
                            <p>Estimated Delivery Date</p>
                            <p>Carrier</p>
                        </div>
                        <div style={{ color: "#D54029", fontFamily: 'Poppins', fontWeight: '600', fontSize: '24px', lineHeight: '36px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <p>Thursday, May 16</p>
                            <img src={post} alt="nologo" />
                        </div>
                        <div style={{ color: "#9EA3A2", fontFamily: 'Poppins', fontWeight: '400', fontSize: '14px', lineHeight: '21px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '40px' }}>
                            <p>Latest shipment status</p>
                            <p>Carrier tracking id</p>
                        </div>
                        <div style={{ color: "#D54029", fontFamily: 'Poppins', fontWeight: '600', fontSize: '24px', lineHeight: '36px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <p>Thursday, May 16</p>
                            <p>123XXXXXXX</p>
                        </div>
                        <Deliverydetails />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card6;