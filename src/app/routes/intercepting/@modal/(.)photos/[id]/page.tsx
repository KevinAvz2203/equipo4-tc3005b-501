import { Modal } from "./modal";

export default function PhotoModal({
  params,
}: {
  params: { id: string };
}) {
  const { id: photoId } = params;
  return <Modal>{photoId}</Modal>;
}
