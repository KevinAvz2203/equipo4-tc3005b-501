import { wait } from "../_lib/data";

const ImportantData = async ({
  color,
  timeOut,
}: {
  color: string;
  timeOut: number;
}) => {
  await wait(timeOut);
  return (
    <div className={`flex-1 ${color} text-center rounded-2xl p-5 shadow-sm`}>
      <h1>Ya se cargó la info importantisima</h1>
    </div>
  );
};

export default ImportantData;
