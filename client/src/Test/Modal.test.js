// import dependencies
import React from "react";
import Modalpage from "../Testercode/Modalpage";
// import API mocking utilities from Mock Service Worker
import {IoIosAddCircleOutline} from   'react-icons/io';
// import react-testing methods
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom";
// the component to test



let iconbutton 

beforeEach(()=>{
        render(<Modalpage />);
        iconbutton = screen.getByLabelText("addbutton") 
        fireEvent.click(iconbutton)
})

test("check hello",async()=>{
        const helloword =  screen.getByText(/Hello/);  
        expect(helloword).toBeInTheDocument();
})


test("check sub",async()=>{
    
       
        const sub = screen.getByText(/I am a modal/); 
   
        expect(sub).toBeInTheDocument();
   
})

test("check form",async()=>{
    
       
        const name = screen.getByLabelText("name:");
        const age = screen.getByLabelText("age:");
        const id = screen.getByLabelText("id:"); 
    
        await  userEvent.type(name, "mugilan@gmail.com");
        await  userEvent.type(id, "1");
        await  userEvent.type(age, "20");
    
        expect(name.value).toBe("mugilan@gmail.com")
        expect(age.value).toBe("20")  
        expect(id.value).toBe("1")
        const send = screen.queryByText("send");
        expect(send).toBeInTheDocument();
        fireEvent.click(send);
})


