import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import ContextModal from '../Dialog';
import { useEffect, useState } from 'react';
export default function BottomFab() {
    const [showModal, setShowModal] = useState(false);
    const [key, setKey] = useState(0);

    return (
        <div className="lg:hidden relative">
            <Fab
                alwaysShowTitle={true}
                style={{
                    bottom: 0, right: 0
                }}
                icon={
                    <img
                    src="https://avatars.githubusercontent.com/u/98937618?s=400&u=ff1be47dee7d9c7a7b7d42c82566268295cbe1e7&v=4"
                    className="rounded-full"
                  />
                }
            >
                <Action
                    text="About Me"
                    onClick={() => {
                            setShowModal(true)
                            setKey(key + 1);
                        }
                    }
                    >
                    <img
                        src="https://avatars.githubusercontent.com/u/98937618?s=400&u=ff1be47dee7d9c7a7b7d42c82566268295cbe1e7&v=4"
                        className="rounded-full"
                    />
                </Action>
                <Action
                    text="Github"
                    onClick={()=> window.open("https://github.com/faizulramir", "_blank")}
                    style={{
                        backgroundColor: 'black'
                    }}
                    >
                    <GitHubLogoIcon className="w-6 h-6" />
                </Action>
                <Action
                    text="LinkedIn"
                    onClick={()=> window.open("https://www.linkedin.com/in/faizul-amir-5009a4197/", "_blank")}
                    style={{
                        backgroundColor: '#0077b5'
                    }}
                    >
                    <LinkedInLogoIcon className="w-6 h-6" />
                </Action>
            </Fab>

            {
                showModal &&
                <ContextModal
                    key={key}
                    title="About Me"
                    description="Experienced full-stack developer with a passion for creating."
                    openModal={showModal}
                />
            }
        </div>
    )
}