import React from 'react';
import logo from '../assets/zippyy_logo.svg';
import Stepper from './Stepper/HorizontalStepper'
import post from '../assets/post.svg'
import Deliverydetails from './Deliverydetails/Deliverydetails';
function Orderstatus() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div style={{ width: '100%', paddingLeft: '5%', padding: '5%', border: '1px solid #D9D9D9', borderRadius: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <p style={{ color: "#5F5A6B", fontFamily: 'Poppins', fontWeight: '700', fontSize: '16px', lineHeight: '24px' }}>
                        Order id : <span style={{ fontWeight: '400' }}>12123345ASX</span>
                    </p>
                    <p style={{ color: "#5F5A6B", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>
                        Last updated: <span style={{ color: 'black', fontWeight: '500' }}>May 16, 01:00pm UTC </span>
                    </p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <img style={{ marginTop: '10%' }} src={logo} alt="Nologo" />
                </div>
                <div style={{ width: '100%', height: 'auto' }}>
                    <Stepper />
                </div>

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

    );
}

export default Orderstatus;




