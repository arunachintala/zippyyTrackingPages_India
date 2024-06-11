import React from 'react';
import { useNavigate } from 'react-router-dom';
import Orderboxs from '../Orderboxs';
import packing from '../../assets/Packing.svg';
import box from '../../assets/Vector.svg';
import phone from '../../assets/Phone.svg';

function Page3() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/page4');
    };

    return (
        <div style={{ border: '1px solid white', marginBottom: '10%', width: '100%', backgroundColor: '#F5F8F8', height: 'auto' }}>
            <div>
                <p style={{ marginTop: '2%', marginLeft: '3%', fontFamily: 'Poppins', fontWeight: 600, fontSize: '32px', lineHeight: '48px' }}>Zippyy Tracking</p>
            </div>

            <div style={{ margin: '1%', borderRadius: '16px', backgroundColor: '#FFFFFF', padding: '2%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ width: '50%' }}>
                        <div style={{ marginBottom: '6%', height: 'auto' }}>
                            <p style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '16px', lineHeight: '24px', color: '#121114', marginBottom: '1%' }}>Tracking Status</p>
                            <p style={{ fontFamily: 'Poppins', color: '#5F5A6B', fontWeight: '400', fontSize: '12px', lineHeight: '18px' }}>Quickly check your tracking status below or click on details see more info.</p>
                        </div>
                        <Orderboxs />
                    </div>
                    <div style={{ width: '50%', height: '100%' }}>
                        <div style={{ width: '100%', border: '1px solid #D9D9D9', height: '75%', borderRadius: '16px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                <img style={{ marginTop: '20%' }} src={packing} alt="no logo"></img>
                                <p style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '28px', lineHeight: '41.44px', color: '#121114', marginBottom: '20%' }}>Sorry! Invalid Order ID</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ width: '45%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                        <button
                            style={{
                                backgroundColor: 'white',
                                border: '1px solid black',
                                borderRadius: '6px',
                                padding: '10px',
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#121114',
                                textAlign: 'center',
                                width: '240px',
                                height: '36px',
                                fontFamily: 'Poppins',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            onClick={handleBackClick} // Add click handler
                        >
                            Back
                        </button>
                    </div>
                    <div style={{ width: '50%', marginTop: '2%', display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', backgroundColor: '#F5F8F8', height: '25%' }}>
                        <div style={{ paddingLeft: '5%', paddingTop: '3%', color: '#121114', fontFamily: 'Poppins', fontWeight: '500', fontSize: '22px', lineHeight: '33px' }}>
                            <p>Contact Information</p>
                        </div>
                        <div style={{ paddingLeft: '5%', paddingTop: '2%', color: '#5F5A6B' }}>
                            <img src={box} alt="logo" />
                            <span style={{ paddingLeft: '1%', color: '#5F5A6B', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}> support@godash.ai</span>
                        </div>
                        <div style={{ paddingLeft: '5%', paddingTop: '2%', color: '#5F5A6B', paddingBottom: '3%' }}>
                            <img src={phone} alt="logo" />
                            <span style={{ paddingLeft: '1%', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}> 1800097866</span>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p style={{ fontWeight: '400', fontSize: '12px', lineHeight: '18px', color: '#121114', marginLeft: '85%', paddingTop: '1%' }}>Powered by Zippyy</p>
                </div>
            </div>
        </div>
    );
}

export default Page3;

