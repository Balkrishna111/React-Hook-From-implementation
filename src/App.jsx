import { useForm } from "react-hook-form";

const App = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    // e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <div className='h-screen w-screen p-12'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", {
            required: "Enter a valid email",
            validate: (value) => {
              if (!value.includes("@")) {
                return "must include @";
              }
              return true;
            },
          })}
          type='text'
          placeholder='Enter Email'
          className='w-full border-2 border-black p-4 rounded-xl text-lg'
        />
        {errors.email && (
          <div>
            <p className='text-red-600 mt-4'>{errors.email.message}</p>
          </div>
        )}
        <input
          {...register("password", {
            required: "Invalid Password",
            validate: (value) => {
              if (value.length < 8) {
                return "length must me greater than or equal to 8";
              }
              return true;
            },
          })}
          type='password'
          placeholder='Enter Password'
          className='w-full my-7 border-2 border-black p-4 rounded-xl text-lg'
        />
        {errors.password && (
          <div>
            <p className='text-red-600 my-4'>{errors.password.message}</p>
          </div>
        )}
        <button
          disabled={isSubmitting}
          type='submit'
          className='w-full bg-black text-white p-4 rounded-xl text-lg'
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
        {errors.root && (
          <div>
            <p className='text-red-600 my-4'>{errors.root.message}</p>
          </div>
        )}
      </form>
    </div>
  );
};
export default App;
