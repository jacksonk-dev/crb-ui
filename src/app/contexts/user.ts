import { createContext } from 'react';

import { User } from 'src/app/shared/types/user';

export const UserContext = createContext<User | null | undefined>(null);