import { Grid } from "@mui/material";
import React from "react";
function Orderboxs() {
    return (
        <div>
            < Grid container style={{ borderRadius: '6px', marginBottom: '2%', padding: '2%', border: '1px solid #D9D9D9', width: '90%', height: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Grid item xs={4}>  <p style={{
                    fontFamily: 'Poppins',
                    fontWeight: '600',
                    fontSize: '14px',
                    lineHeight: '21px',
                    color: '#121114',
                    margin: '0'
                }}>AWB :  <span style={{ fontWeight: '400' }}>2203331212</span></p>
                </Grid>
                <Grid item xs={5.5}>
                    <p style={{
                        fontFamily: 'Poppins',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '21px',
                        color: '#121114',
                        paddingLeft: '1%',
                        margin: '0'
                    }}>Status : <span style={{ fontWeight: '400' }}>Shipment info shared</span></p>

                </Grid>
                <Grid item xs={2.5}>
                    <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '106px', height: '36px', fontWeight: '500', fontSize: '16px', lineHeight: '24px', verticalAlign: 'center', padding: '10px', border: '1px solid white', borderRadius: '6px', backgroundColor: '#D54029', color: '#FFFFFF' }}>
                        Details&nbsp;&nbsp;&gt;
                    </button>
                </Grid>
            </Grid>
            <Grid container style={{ borderRadius: '6px', marginBottom: '2%', padding: '2%', border: '1px solid #D9D9D9', width: '90%', height: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Grid item xs={4}>
                    <p style={{
                        fontFamily: 'Poppins',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '21px',
                        color: '#121114'
                    }}>AWB :  <span style={{ fontWeight: '400' }}>2203331212</span></p>
                </Grid>
                <Grid item xs={5.5}>
                    <p style={{
                        fontFamily: 'Poppins',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '21px',
                        color: '#121114',
                        paddingLeft: '1%'
                    }}>Status : <span style={{ fontWeight: '400' }}>Tracking not generated</span></p>
                </Grid>
                <Grid item xs={2.5}>
                    <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '106px', height: '36px', fontWeight: '500', fontSize: '16px', lineHeight: '24px', verticalAlign: 'center', padding: '10px', border: '1px solid white', borderRadius: '6px', backgroundColor: '#D54029', color: '#FFFFFF' }}>
                        Details&nbsp;&nbsp;&gt;
                    </button>
                </Grid>
            </Grid>
            <Grid container style={{ borderRadius: '6px', marginBottom: '2%', padding: '2%', border: '1px solid #D9D9D9', width: '90%', height: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Grid item xs={4}>
                    <p style={{
                        fontFamily: 'Poppins',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '21px',
                        color: '#121114'
                    }}>AWB :  <span style={{ fontWeight: '400' }}>2203331212</span></p>
                </Grid>
                <Grid item xs={5.5}>
                    <p style={{
                        fontFamily: 'Poppins',
                        fontWeight: '400',
                        fontSize: '14px',
                        lineHeight: '21px',
                        color: '#D54029',
                        paddingLeft: '1%'
                    }}>Sorry ! Invalid AWB number</p>
                </Grid>
                <Grid item xs={2.5}>
                    <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '106px', height: '36px', fontWeight: '500', fontSize: '16px', lineHeight: '24px', verticalAlign: 'center', padding: '10px', border: '1px solid white', borderRadius: '6px', backgroundColor: '#D54029', color: '#FFFFFF' }}>
                        Details&nbsp;&nbsp;&gt;
                    </button>
                </Grid>
            </Grid>
            <a href="http://localhost:3000/" style={{ color: '#0C77FF', fontFamily: 'Poppins', fontWeight: 400, fontSize: '12px', lineHeight: '18px', textAlign: 'center', textDecoration: 'underline', textDecorationColor: '#0C77FF' }}> Need help?</a>
        </div>




    )
}
export default Orderboxs;

