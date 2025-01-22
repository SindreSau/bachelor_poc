import { Home, FileUser, FormInputIcon, UploadCloud, Lock } from 'lucide-react';

export const navigationLinks = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'PDF preview',
    url: '/pdf-preview',
    icon: FileUser,
  },
  {
    title: 'PDF validation',
    url: '/pdf-validation',
    icon: Lock,
  },
  {
    title: 'PDF blobstorage',
    url: '/pdf-blobstorage',
    icon: UploadCloud,
  },
  {
    title: 'Application Form',
    url: '/application-form',
    icon: FormInputIcon,
  },
];
