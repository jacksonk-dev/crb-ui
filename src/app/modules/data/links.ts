import { AiOutlineCloudUpload as UploadIcon } from 'react-icons/ai';
import { BsFilesAlt as AllFilesIcon, BsFiles as FilesIcon } from 'react-icons/bs';

import { Link } from 'src/app/shared/modals/appConstants';

const links: Array<Link> = [
  {
    label: 'Upload Files',
    to: 'upload',
    Icon: UploadIcon
  },
  {
    label: 'My Uploads',
    to: 'my-uploads',
    Icon: FilesIcon
  },
  {
    label: 'All Uploads',
    to: 'all-uploads',
    Icon: AllFilesIcon
  }
];

export default links;