import { AuthModalInputsProps } from './AuthModalInputs.props';

const AuthModalInputs = ({
  inputs,
  handleChangeInput,
  isSignin,
  ...props
}: AuthModalInputsProps) => {
  return (
    <div {...props}>
      {isSignin ? null : (
        <div className='my-3 flex justify-between text-sm'>
          <input
            type='text'
            className='border rounded p-2 py-3 w-[49%]'
            placeholder='First Name'
            value={inputs.firstName}
            name='firstName'
            onChange={(e) => {
              handleChangeInput(e);
            }}
          />
          <input
            type='text'
            className='border rounded p-2 py-3 w-[49%]'
            placeholder='Last Name'
            value={inputs.lastName}
            name='lastName'
            onChange={(e) => {
              handleChangeInput(e);
            }}
          />
        </div>
      )}
      <div className='my-3 flex justify-between text-sm'>
        <input
          type='mail'
          className='border rounded p-2 py-3 w-full'
          placeholder='Email'
          value={inputs.email}
          name='email'
          onChange={(e) => {
            handleChangeInput(e);
          }}
        />
      </div>
      {isSignin ? null : (
        <div className='my-3 flex justify-between text-sm'>
          <input
            type='text'
            className='border rounded p-2 py-3 w-[49%]'
            placeholder='Phone'
            value={inputs.phone}
            name='phone'
            onChange={(e) => {
              handleChangeInput(e);
            }}
          />
          <input
            type='text'
            className='border rounded p-2 py-3 w-[49%]'
            placeholder='City'
            value={inputs.city}
            name='city'
            onChange={(e) => {
              handleChangeInput(e);
            }}
          />
        </div>
      )}
      <div className='my-3 flex justify-between text-sm'>
        <input
          type='password'
          className='border rounded p-2 py-3 w-full'
          placeholder='Password'
          value={inputs.password}
          name='password'
          onChange={(e) => {
            handleChangeInput(e);
          }}
        />
      </div>
    </div>
  );
};

export default AuthModalInputs;
