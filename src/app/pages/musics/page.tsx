import { videos } from "../../../../music.data";
import VideoGallery from "@/components/video/VideoGallery";

export default function Music() {
  return <VideoGallery videos={videos} videoName="diaspo-mc" />;
}
