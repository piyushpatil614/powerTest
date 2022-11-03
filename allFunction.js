

function getData(filename)
{
    var fs = require('fs'); 
    let data = fs.readFileSync(filename, 'utf8');
    data=data.split('\n')
    data[0]=data[0].split('\r')[0]
    data[1]=data[1].split('\r')[0]
    data[0]=data[0].split(' ')
    data[0]=data[0].slice(1,4)
    data[1]=data[1].split(' ')
    data[1]=data[1].slice(1,3)
    return data
}

function coordinatesInNumber(data)
{
    let source_x=parseInt(data[0][0])
    let source_y=parseInt(data[0][1])
    let direction=data[0][2]
    let destination_x=parseInt(data[1][0])
    let destination_y=parseInt(data[1][1])
    let allInfo=[]
    allInfo.push(source_x)
    allInfo.push(source_y)
    allInfo.push(direction)
    allInfo.push(destination_x)
    allInfo.push(destination_y)
    return allInfo ;
}

function getQuadrant(x,y)
{
    if(x>0 && y>0)
    {
        return 1;
    }
    else
    {
        if(x>0 && y<0)
        {
            return 2;
        }
        else
        {
            if(x<0 && y<0)
            {
                return 3;
            }
            else
            {
                return 4;
            }
        }
    }
    
}

function mod(n)
{
    if(n<0)
    {
        return (n*-1)
    }
    else
    {
        return (n)
    }
}

function onLine(d_x,d_y,direction)
{
    let distance=mod(d_y)+mod(d_x)
    switch (direction) {
        case 'N':
            if(d_y>0 && d_x==0)
            {
                return (distance*10)
            }
            if(d_y<0 && d_x==0)
            {
                return (distance*10+10)
            }
            if(d_y==0)
            {
                return (distance*10+5)
            }
            
            break;
        
        case 'E':
            if(d_y==0 && d_x>0)
            {
                return (distance*10)
            }
            if(d_y==0 && d_x<0)
            {
                return (distance*10+10)
            }
            if(d_x==0)
            {
                return (distance*10+5)
            }
            break;
        case 'S':
            if(d_x==0 && d_y<0)
            {
                return (distance*10)   
            }
            if(d_x==0 && d_y>0)
            {
                return (distance*10+10)
            }
            if(d_y==0)
            {
                return (distance*10+5)
            }
            break;
        case 'W':
            if(d_y==0 && d_x<0)
            {
                return (distance*10)
            }
            if(d_y==0 && d_x>0)
            {
                return (distance*10+10)
            }
            if(d_x==0)
            {
                return (distance*10+5)
            }
            break;
            
        default:
            break;
    }
}

function notOnLine( d_x, d_y,direction)
{
    let distance=mod(d_y)+mod(d_x)
    let quad=getQuadrant(d_x,d_y)
    switch (direction) {
        case 'N':
            if(quad==1 || quad==4)
            {
                return (distance*10+5)
            }
            else
            {
                return (distance*10+10)
            }
            

        case 'E':
            if(quad==1 || quad==2)
            {
                return (distance*10+5)
            }
            else
            {
                return (distance*10+10)
            }
            

        case 'S':
            if(quad==2 || quad==3)
            {
                return (distance*10+5)
            }
            else
            {
                return (distance*10+10)
            }
            

        case 'W':
            if(quad==3 || quad==4)
            {
                return (distance*10+5)
            }
            else
            {
                return (distance*10+10)
            }
            

        default:
            break;
    }
}

function countEnergy(info)
{
    let x=info[3]-info[0]
    let y=info[4]-info[1]
    let direction=info[2]
    if(x==0 && y==0)
    {
        return (0)
    }
    else
    {
        if(x==0 || y==0)
        {
            return (onLine(x,y,direction))
        }
        else
        {
            return (notOnLine(x,y,direction))
        }
    }
    
}

module.exports = { getData,coordinatesInNumber,countEnergy };