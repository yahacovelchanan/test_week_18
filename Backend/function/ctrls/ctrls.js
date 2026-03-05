import { error } from 'console';
import fs from 'fs/promises'

export async function getMuvieById(req,res){
        try{
        const idByMovie=req.body.id
        const data =await fs.readFile("./data/data.json", "utf8");
        const movies=await JSON.parse(data)
        for(let i=0;i<movies.length;i++){
                if(movies[i].imdbID==idByMovie){
                        return res.json(movies[i])
                }else{
                        continue
                }}
        }catch{
                res.error(error)
                }
}

        






