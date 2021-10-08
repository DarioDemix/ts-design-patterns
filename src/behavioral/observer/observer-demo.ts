import { YoutubeChannel } from "./yt/youtube-channel";
import { YoutubeUser } from "./yt/youtube-user";

export function observerDemo() {
    const davie504 = new YoutubeChannel("Davie504");

    const user1 = new YoutubeUser("First User");
    user1.subscribe(davie504);

    const user2 = new YoutubeUser("Second User");
    user2.subscribe(davie504);

    const user3 = new YoutubeUser("Third User");
    user3.subscribe(davie504);

    davie504.uploadVideo("Balding lights");

}