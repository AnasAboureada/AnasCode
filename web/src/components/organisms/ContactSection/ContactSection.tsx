import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { InferType, object, string } from 'yup';

import { registerGaEvent } from '@/components/libs/GoogleAnalytics';
import SectionTitle from '@/components/molecules/SectionTitle/SectionTitle';
import SectionWrapper from '@/components/templates/SectionWrapper/SectionWrapper';
import { yupResolver } from '@hookform/resolvers/yup';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import { Box, Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const ErrorMessage = ({ error }: { error: string }) => {
  return <p className={'font-sans text-dark-accent'} role="alert">{error}</p>;
};

const ContactSection = () => {
  const { t } = useTranslation();

  const contactMeSchema = object({
    fullName: string().required(),
    email: string().email().required(),
    phone: string(),
    message: string().required(),
  }).required();

  type FormData = InferType<typeof contactMeSchema>;

  const { handleSubmit, register, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: yupResolver(contactMeSchema),
  });

  const [formStatus, setFormStatus] = useState({ success: false, error: false });
  const messageWaitTime = 10000;


  const onSubmit = (data: FormData) => {
    registerGaEvent({ action: 'conversion', category: 'contact', label: 'contactform', value: 1 });

    // to prevent spamming
    reset();

    // handle form submission to Next.js API
    fetch('/api/contactme', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        reset();
        setFormStatus({ success: true, error: false });
        setTimeout(() => setFormStatus({ success: false, error: false }), messageWaitTime);
      })
      .catch((err) => {
        setFormStatus({ success: false, error: true });
        setTimeout(() => setFormStatus({ success: false, error: false }), messageWaitTime);
        registerGaEvent({ action: 'exception', category: 'contact', label: 'contactform', value: err });
      });
  };

  return (
    <SectionWrapper id="contact" className='flex-col'>
      <SectionTitle
        sectionShortTitle={t('home.contact.shortTitle')}
        sectionLongTitle={t('home.contact.longTitle')}
        sectionDescription={t('home.contact.description')}
      />

      <Grid container justifyContent='center' alignItems='center'>
        <Grid sm={12} md={6}>
          <Typography variant="h5" align="center" gutterBottom className="font-sans">
            {t('home.contact.formTitle')}
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>

            <TextField
              label={t('home.contact.formFields.fullName')}
              aria-invalid={errors.fullName ? 'true' : 'false'}
              fullWidth
              {...register('fullName', { required: true, maxLength: 50 })}
              margin="normal"
              required
              className={'font-sans text-dark-accent'}
              error={errors.fullName ? true : false}
            />
            {errors.fullName?.type === 'required' && <ErrorMessage error='Full name is required' />}

            <TextField
              label={t('home.contact.formFields.email')}
              aria-invalid={errors.email ? 'true' : 'false'}
              {...register('email', { required: true })}
              fullWidth
              required
              margin="normal"
              error={errors.email ? true : false}
            />
            {errors.email?.type === 'required' && <ErrorMessage error='Email is required' />}
            {errors.email?.type === 'email' && <ErrorMessage error='Email is not acceptable' />}

            <TextField
              label={t('home.contact.formFields.phone')}
              aria-invalid={errors.phone ? 'true' : 'false'}
              {...register('phone')}
              fullWidth
              margin="normal"
              error={errors.phone ? true : false}
            />
            {errors.phone && <ErrorMessage error='Phone is not correct' />}

            <TextField
              label={t('home.contact.formFields.message')}
              aria-invalid={errors.message ? 'true' : 'false'}
              {...register('message', { required: true })}
              fullWidth
              required
              margin="normal"
              error={errors.message ? true : false}
            />
            {errors.message?.type === 'required' && <ErrorMessage error='Message is required' />}

            <Button
              type="submit"
              className={'text-white bg-brand-color rounded-md font-sans hover:bg-dark-accent mt-8'}
              aria-label='submit'
              fullWidth
              disabled={isSubmitting}
            >
              {t('home.contact.formSubmitButton')}
            </Button>
            {formStatus.success &&
              <Typography variant='body1' className={'font-sans text-success mt-2'} role="alert">
                {t('home.contact.formSubmitted')}
              </Typography>}
            {formStatus.error &&
              <Typography variant='body1' className={'font-sans text-error mt-2'} role="alert">
                {t('home.contact.formSubmitError')}
              </Typography>}
          </form>
        </Grid>

        <Grid sm={12} md={6} className="flex-col">
          <Box className="mt-6">
            <Typography align="center" gutterBottom className={'font-sans'} >
              <PlaceIcon className='mr-2' />
              {t('home.contact.location')}
            </Typography>
            <Typography align="center" gutterBottom className={'font-sans'}>
              <EmailIcon className='mr-2' />
              {t('home.contact.email')}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </SectionWrapper >
  );
};

export default ContactSection;
