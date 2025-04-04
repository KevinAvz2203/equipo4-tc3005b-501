import { wait } from "../_lib/data";

const EsperaDos = async ({ color }: { color: string }) => {
  await wait(3000);
  return (
    <div className={`flex-1 ${color} text-center rounded-2xl p-5 shadow-sm`}>
      <h1>Ya cargue</h1>
    </div>
  );
};

export default EsperaDos;
