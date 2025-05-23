import { videos } from "../../../../film.data";
import VideoGallery from "@/components/video/VideoGallery";

export default function Film() {
  return <VideoGallery videos={videos} videoName="diaspo-mc" />;
}
