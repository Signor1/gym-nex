import { useState } from "react"
import { Button } from "../atoms/Button"
import { InputField } from "../atoms/InputField"
import { Text } from "../atoms/Text"


const Form = () => {
    const [heightValue, setHeightValue] = useState<string>('');
    const [weightValue, setWeightValue] = useState<string>('');
    const [bmiValue, setBmiValue] = useState<string | number>('');
    const [bmiMessage, setBmiMessage] = useState<string>('');

    const calculateBmi = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        if (heightValue && weightValue) {
            const heightInMeters: number = Number(heightValue) / 100;
            const bmi = (Number(weightValue) / (heightInMeters * heightInMeters)).toFixed(2);
            setBmiValue(bmi);

            let message = '';
            if (Number(bmi) < 18.5) {
                message = 'You are Underweight';
            } else if (Number(bmi) >= 18.5 && Number(bmi) < 25) {
                message = 'You are Normal weight';
            } else if (Number(bmi) >= 25 && Number(bmi) < 30) {
                message = 'You are Overweight';
            } else {
                message = 'You are Obese';
            }
            setBmiMessage(message);
        } else {
            setBmiValue('');
            setBmiMessage('');
        }
    };
    return (
        <main className="w-full grid gap-6 pb-10 md:pb-0">

            <InputField className="w-full flex flex-col gap-2">
                <label htmlFor="height" className="uppercase text-sm text-zinc-200 font-bold">Height</label>
                <div className="w-full relative">
                    <input type="number" placeholder="Enter your height" className="w-full h-12 pl-4 pr-8 text-zinc-400 outline-none transition-all duration-200 focus:border-amber-500 border border-zinc-400 bg-transparent" value={heightValue} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setHeightValue(event.target.value)} />
                    <Text as="span" className="absolute text-zinc-200 font-bold top-3 right-4">cm</Text>
                </div>
            </InputField>

            <InputField className="w-full flex flex-col gap-2">
                <label htmlFor="weight" className="uppercase text-sm text-zinc-200 font-bold">Weight</label>
                <div className="w-full relative">
                    <input type="number" placeholder="Enter your weight" className="w-full h-12 pl-4 pr-8 text-zinc-400 outline-none transition-all duration-200 focus:border-amber-500 border border-zinc-400 bg-transparent" value={weightValue} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setWeightValue(event.target.value)} />
                    <Text as="span" className="absolute text-zinc-200 font-bold top-3 right-4">kg</Text>
                </div>
            </InputField>

            <div className="w-full mt-4">
                <Button onClick={calculateBmi} type="button" className="px-6 py-3 bg-gradient-to-r from-red-500 to-amber-500 text-zinc-200 text-sm uppercase font-semibold">Calculate Now</Button>
            </div>

            {
                bmiValue && <div className="w-full flex flex-col p-4 bg-zinc-700">
                    <Text as="h2" className="text-zinc-200 text-lg">Your BMI is <span className="font-extrabold">{bmiValue}</span></Text>
                    <Text as="p" className="text-amber-500">{bmiMessage}</Text>
                </div>
            }

        </main>
    )
}

export default Form