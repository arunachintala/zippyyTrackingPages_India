import React from 'react';
import { useNavigate } from 'react-router-dom';
import Orderboxs from '../Orderboxs';
import Orderstatus from '../Orderstatus';
import box from '../../assets/Vector.svg';
import phone from '../../assets/Phone.svg';

function Page2() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/page3');
    };

    return (
        <div style={{ width: '100%', backgroundColor: '#F5F8F8', border: '1px solid white' }}>
            <div>
                <p style={{ marginTop: '2%', marginLeft: '30px', fontFamily: 'Poppins', fontWeight: 600, fontSize: '32px', lineHeight: '48px' }}>Zippyy Tracking</p>
            </div>

            <div style={{ margin: '1%', borderRadius: '16px', backgroundColor: '#FFFFFF', padding: '2%' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <div style={{ width: '50%' }}>
                            <div style={{ marginBottom: '10%', height: 'auto' }}>
                                <p style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '16px', lineHeight: '24px', color: '#121114', marginBottom: '1%' }}>Tracking Status</p>
                                <p style={{ fontFamily: 'Poppins', color: '#5F5A6B', fontWeight: '400', fontSize: '12px', lineHeight: '18px' }}>Quickly check your tracking status below or click on details see more info.</p>
                            </div>
                            <Orderboxs />
                        </div>
                        <div style={{ width: '50%' }}>
                            <Orderstatus />
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', width: '50%' }}>
                        <button
                            style={{
                                backgroundColor: 'white',
                                border: '1px solid black',
                                borderRadius: '6px',
                                padding: '1%',
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#121114',
                                textAlign: 'center',
                                width: '240px',
                                height: '36px',
                                fontFamily: 'Poppins',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onClick={handleBackClick}
                        >
                            Back
                        </button>
                    </div>
                    <div style={{ width: '50%', display: 'flex', flexDirection: 'column', backgroundColor: '#F5F8F8', marginTop: '2%' }}>
                        <div style={{ paddingLeft: '5%', paddingTop: '3%', color: '#121114', fontFamily: 'Poppins', fontWeight: '500', fontSize: '22px', lineHeight: '33px' }}>
                            <p>Contact Information</p>
                        </div>
                        <div style={{ paddingLeft: '5%', paddingTop: '1%', color: '#5F5A6B' }}>
                            <img src={box} alt="logo" />
                            <span style={{ paddingLeft: '1%', color: '#5F5A6B', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}> support@godash.ai</span>
                        </div>
                        <div style={{ paddingLeft: '5%', paddingTop: '1%', color: '#5F5A6B' }}>
                            <img src={phone} alt="logo" />
                            <span style={{ paddingLeft: '1%', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}> 1800097866</span>
                        </div>
                        <div style={{ paddingLeft: '1%', paddingTop: '1%', marginRight: '1%' }}>
                            <hr style={{ width: '100%' }}></hr>
                        </div>
                        <div style={{ paddingLeft: '5%', paddingTop: '0.5%', paddingBottom: '0.5%', color: '#0C77FF', fontFamily: 'Poppins', fontWeight: '400', fontSize: '10px', lineHeight: '15px' }}>
                            <p>Privacy policy</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: '12px', lineHeight: '18px', color: '#121114', marginTop: '5px' }}>Powered by Zippyy</p>
                </div>
            </div>
        </div>
    );
}

export default Page2;
