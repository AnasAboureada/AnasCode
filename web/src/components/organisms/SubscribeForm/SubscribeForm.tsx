import React, { useState } from 'react';

import { Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';

function SubscribeForm() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" size='small' onClick={handleClickOpen} className="my-2">
        Follow
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className='font-sans'>Join the AnasCode Insider Community!</DialogTitle>
        <DialogContent>
          <form action={process.env.NEXT_PUBLIC_MAILCHIMP_URL}
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            noValidate>
            <div>
              <TextField type="email" name="EMAIL" required className="my-4 w-full font-sans" label="Email Address" />
              <div id="mce-responses" className="clear foot">
                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
              </div>
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input type="text" name="b_e6511e05e9e45adbdae638184_51ce2d3685" tabIndex={-1} value="" />
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                id="mc-embedded-subscribe"
                className={'text-white font-sans bg-brand-color rounded-md font-sans hover:bg-dark-accent mt-4'}
              >
                Subscribe
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SubscribeForm;
