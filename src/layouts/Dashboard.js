import React from 'react'
import {Button, Icon ,Label} from 'semantic-ui-react'

export default function Dashboard(){
return(
    <div>
        <Button as ="div" labelPosition="right">
            <Button color="red">
                <Icon name ="heart"/>
                Like
            </Button>
            <Label as ="a" basic color = "red" pointing ="left">
                2,048
            </Label>
        </Button>
    </div>
)

}