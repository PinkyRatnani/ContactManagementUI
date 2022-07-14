export class AppService {
    public async getUsers(): Promise<any> {
        const response = await fetch('https://localhost:5001/api/user/contacts',
        { 
            mode: 'cors',
           // credentials: 'same-origin'
           headers:{"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"}
            //body: JSON.stringify({user})
          })
        .then(x =>x.json()).then(y=> console.log(y))
        console.log('response')
        console.log(response)
        return await response;
    }

    public async addUser(user: any) {
        const response = await fetch(`/api/user`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user})
          })
        return await response;
    }

}