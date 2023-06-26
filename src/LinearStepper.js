import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import {
  useForm,
  FormProvider,
  useFormContext,
  Controller,
} from "react-hook-form";
import { DevTool } from "@hookform/devtools";
function getSteps() {
  return [
    "Basic information",
    "Contact Information",
    "Personal Information",
    "Payment",
  ];
}
const BasicInformation = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="firstName"
        rules={{
          required: "first name is required",
        }}
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        rules={{
          required: "last name is required",
        }}
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="nickName"
        rules={{
          required: "nick name is required",
        }}
        render={({ field }) => (
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.nickName)}
            helperText={errors.nickName?.message}
          />
        )}
      />
    </>
  );
};
const ContactInformation = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="emailAddress"
        rules={{
          required: "email is required",
          pattern: {
            value:
              /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "please enter a valid email address",
          },
        }}
        render={({ field }) => (
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.emailAddress)}
            helperText={errors.emailAddress?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="phoneNumber"
        rules={{
          required: "phoneNumber is required",
          pattern: {
            value: /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/,
            message: "Invalid phone number",
          },
        }}
        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.phoneNumber)}
            helperText={errors.phoneNumber?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="alternatePhone"
        rules={{
          required: "alternate number is required",
        }}
        render={({ field }) => (
          <TextField
            id="alternate-phone"
            label="Alternate Phone"
            variant="outlined"
            placeholder="Enter Your Alternate Phone"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.alternatePhone)}
            helperText={errors.alternatePhone?.message}
          />
        )}
      />
    </>
  );
};
const PersonalInformation = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="address1"
        rules={{
          required: "address1 is required",
        }}
        render={({ field }) => (
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.address1)}
            helperText={errors.address1?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="address2"
        rules={{
          required: "address2 is required",
        }}
        render={({ field }) => (
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.address2)}
            helperText={errors.address2?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="country"
        rules={{
          required: "country is required",
        }}
        render={({ field }) => (
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.country)}
            helperText={errors.country?.message}
          />
        )}
      />
    </>
  );
};
const PaymentInformation = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="cardNumber"
        rules={{
          required: "cardNumber is required",
        }}
        render={({ field }) => (
          <TextField
            id="cardNumber"
            label="Card Number"
            variant="outlined"
            placeholder="Enter Your Card Number"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.cardNumber)}
            helperText={errors.cardNumber?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="cardMonth"
        rules={{
          required: "cardMonth is required",
        }}
        render={({ field }) => (
          <TextField
            id="cardMonth"
            label="Card Month"
            variant="outlined"
            placeholder="Enter Your Card Month"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.cardMonth)}
            helperText={errors.cardMonth?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="cardYear"
        rules={{
          required: "cardYear is required",
        }}
        render={({ field }) => (
          <TextField
            id="cardYear"
            label="Card Year"
            variant="outlined"
            placeholder="Enter Your Card Year"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.cardYear)}
            helperText={errors.cardYear?.message}
          />
        )}
      />
    </>
  );
};
function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicInformation></BasicInformation>;
    case 1:
      return <ContactInformation />;

    case 2:
      return <PersonalInformation />;

    case 3:
      return <PaymentInformation />;

    default:
      return "unknown step";
  }
}
let count = 0;
const LinaerStepper = () => {
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };
  const handleNext = (data) => {
    console.log(data);
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  const isStepFailed = () => {
    return Boolean(Object.keys(methods.formState.errors).length);
    console.log(methods.formState.errors);
  };
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepFailed() && activeStep == index) {
            labelProps.error = true;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}
              <Button disabled={activeStep === 0} onClick={handleBack}>
                back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  sx={{ marginRight: "10px" }}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )}
              <Button variant="contained" color="primary" type="submit">
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
            <DevTool control={methods.control} />
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
