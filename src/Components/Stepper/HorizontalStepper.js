
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import Check from '@mui/icons-material/Check';

const steps = [
    'Pre transit',
    'In transit',
    'Out for Delivery',
    'Delivered',
];


const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 12px)',
        right: 'calc(50% + 12px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        '& .MuiStepConnector-line': {
            borderColor: '#D54029',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        '& .MuiStepConnector-line': {
            borderColor: '#D54029',
        },
    },
    '& .MuiStepConnector-line': {
        borderColor: theme.palette.divider,
        borderTopWidth: 2,
        borderRadius: 1,
        marginTop: -5,
    },
}));


const CustomStepIcon = (props) => {
    const { completed, index } = props;

    const isThirdStep = index === 2;
    const isLastStep = index === steps.length - 1;

    return (
        <div
            style={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 24,
                height: 24,
                borderRadius: '50%',
                border: `4px solid ${completed && !isLastStep ? '#D54029' : isThirdStep ? '#D54029' : isLastStep ? 'white' : '#9EA3A2'}`, // Updated colors
                backgroundColor: completed && !isThirdStep && !isLastStep ? '#D54029' : isLastStep ? '#9EA3A2' : 'white', // Updated colors
                position: 'relative',
                top: -5,
                zIndex: 1,
            }}
        >
            {completed && !isLastStep ? <Check style={{ fontSize: 18 }} /> : null}
        </div>
    );
};

function HorizontalLinearAlternativeLabelStepper() {
    return (
        <Box sx={{ width: '100%', marginTop: '20px' }}>
            <Stepper
                activeStep={2}
                alternativeLabel
                connector={<QontoConnector />}
            >
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel
                            StepIconComponent={(props) => (
                                <CustomStepIcon {...props} index={index} />
                            )}
                            style={{ color: index === 2 ? '#D54029' : '#9EA3A2' }}
                        >
                            <span style={{ color: index === 2 ? '#D54029' : '#9EA3A2', fontSize: '14px', fontWeight: 400 }}>{label}</span>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}

export default HorizontalLinearAlternativeLabelStepper;
