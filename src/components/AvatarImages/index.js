import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


 const AvatarImages = (alt, src) => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt={alt} src={src} />
    </Stack>
  );
}

export default AvatarImages;