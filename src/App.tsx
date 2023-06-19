import React, { useState, useCallback, useEffect, useRef } from "react";

import {Layout} from "./components/Layout";
import {Building} from "./components/Building";
import {ElevatorButtons} from "./components/Elevator/ElevatorButtons";

import {FLOORS} from "./constants";
import {BUILDINGS} from "./constants";

const sound = require("./assets/elevator.mp3");

export default function App() {
    const [currentFloor, setCurrentFloor] = useState(0);
    const [elevatorRequests, setElevatorRequests] = useState<number[]>([]);
    const interval = useRef<NodeJS.Timeout | null>(null);
    const buildingsArray = [...Array(BUILDINGS).keys()];

    useEffect(() => {
        return () => {
            if (interval.current) {
                clearInterval(interval.current);
            }
        };
    }, []);

    const onFloorRequest = useCallback(
        (floor: number) => {
            if (floor !== currentFloor) {
                setElevatorRequests([...elevatorRequests, floor]);
            }
        },
        [elevatorRequests, currentFloor]
    );

   const moveToFloor = useCallback(
        (floor: number) => {
            setCurrentFloor(floor);
            const newRequests:number[] = [...elevatorRequests]
            if(newRequests.length) {
                newRequests?.shift()
            }
            setElevatorRequests(newRequests);
            new Audio(sound).play();
        },
        [elevatorRequests]
    );

    useEffect(() => {
        if (interval.current) {
            clearInterval(interval.current);
        }
        interval.current = setInterval(() => {
            elevatorRequests.forEach((request, i, array) => {
                   moveToFloor(array[0]);
                   return;
            });
        }, 2000);
    }, [elevatorRequests, currentFloor, moveToFloor]);


    return (
        <Layout className="App">
            {buildingsArray.map((value, index, array) => {
                return <Building key={value} floors={FLOORS} currentFloor={currentFloor} />;
            })}
            <ElevatorButtons
                floors={FLOORS}
                onFloorRequest={onFloorRequest}
                pressed={elevatorRequests}
            />
        </Layout>
    );
}
