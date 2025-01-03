import {Info} from "lucide-react";

function AboutButton() {
    return (
        <div>
            <button
                onClick={() => {
                    const dialog = document.getElementById('about_modal') as HTMLDialogElement;
                    dialog?.showModal();
                }}
                className="absolute bottom-4 right-4 btn btn-circle btn-secondary hover:btn-primary"
            >
                <Info className="text-white"/>
            </button>
            <dialog id="about_modal" className="modal">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Pomodora App</h3>
                    <div className="flex my-2">
                        <span className="w-2/5 font-bold">Inspiration:</span>
                        <a href="https://codepen.io/JoeCodesStuff/pen/bLbbxK" target="_blank" className="text-secondary underline hover:text-primary">JoeCodesStuff</a>
                    </div>
                    <div className="my-2">
                        <p className="font-bold">Music:</p>
                         <div className="flex flex-col">
                            <span className="pl-4">Summer Rain</span>
                            <span className="pl-12">
                                <a
                                    href="https://pixabay.com/users/natureseye-18615106/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=109413"
                                    target="_blank"
                                    className="text-secondary underline hover:text-primary"
                                >Leigh Robinson</a> from
                                <a
                                    href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=109413"
                                    target="_blank"
                                    className="text-secondary underline hover:text-primary ml-1"
                                >Pixabay</a>
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="pl-4">Forest Piano</span>
                            <span className="pl-4">Healing Waves</span>
                            <span className="pl-4">Spiritual Healing</span>
                            <span className="pl-4">Cosmic Ambient</span>
                            <span className="pl-12">
                                <a
                                    href="https://pixabay.com/users/light_music-40074088/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=195498"
                                    target="_blank"
                                    className="text-secondary underline hover:text-primary"
                                >Alex Wit</a> from
                                <a
                                    href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=195498"
                                    target="_blank"
                                    className="text-secondary underline hover:text-primary ml-1"
                                >Pixabay</a>

                            </span>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-secondary text-white hover:btn-primary hover:text-white">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default AboutButton