import { handleSubmit } from './formHandler'
import {fetchdata} from './formHandler'
test('test if the function handlesubmit is defined',  () => {
    expect(handleSubmit).toBeDefined();
});

test('fetchdata is function and it is exist', ()=>{
    expect(fetchdata).toBeDefined();
})

