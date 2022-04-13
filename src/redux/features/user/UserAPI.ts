
export interface IUser {
  firstname: string,
  lastname: string,
  phone: string,
}

interface IUserAPIRes {
  data: IUser,
}

export function fetchUser(details: IUser): Promise<IUserAPIRes> {
  return new Promise<IUserAPIRes>((resolve) => {
    setTimeout(() => resolve({ data: details } as IUserAPIRes), 2000);
  });
}

export function fetchRegisterUser(details: IUser): Promise<IUserAPIRes> {
  return new Promise<IUserAPIRes>((resolve) => {
    setTimeout(() => resolve({ data: details } as IUserAPIRes), 2000);
  });
}