import { YoutubeChannel } from "./yt/youtube-channel";
import { YoutubeUser } from "./yt/youtube-user";

export function observerDemo() {
    const academind = new YoutubeChannel("Academind");

    const user1 = new YoutubeUser("First User");
    user1.subscribe(academind);

    const user2 = new YoutubeUser("Second User");
    user2.subscribe(academind);

    const user3 = new YoutubeUser("Third User");
    user3.subscribe(academind);

    academind.notifyObservers("React Crash Course for Beginners 2021 - Learn ReactJS from Scratch in this 100% Free Tutorial!");

}