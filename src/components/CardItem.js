import React from 'react';

const CardItem = ({service}) => {
    const {name,username,phone,address,email,company,website}= service;
    const {city,street,zipcode,geo} = address;
    const {bs,catchPhrase}= company;
    const {lat,lng} = geo
    return (
        <div className='bg-white my-4 mx-3 rounded items-center py-8 px-3 shadow '>


               
        <div className='flex justify-between'>
            <h2 className='text-2xl'>{name}</h2>

            <div>
            <h2 className='text-2xl'>Contact</h2>
            <p className="text-xl text-slate-500">{username}</p>
            </div>

            <div>
            <h2 className='text-2xl'>City</h2>
            <p className="text-xl text-slate-500">{city}</p>
            </div>

            </div>
         <div className="collapse">
            <input type="checkbox" className="peer" /> 
            <div className="collapse-title">
            <button className="btn btn-warning">Details</button>
            </div>
            <div className="collapse-content flex items-center justify-between border rounded shadow"> 
            
            <div>
            <div>
                    <h2 className="text-2xl bold">Contact Person</h2>
                    <p className="text-xl text-slate-500">{name}</p>
                </div>

                <div>
                    <h2 className="text-2xl bold">Desination</h2>
                    <p className="text-xl text-slate-500">{company.name}</p>
                </div>
                
                <div>
                    <h2 className="text-2xl bold">Email</h2>
                    <p className="text-xl text-slate-500">{email}</p>
                </div>

                <div>
                    <h2 className="text-2xl bold">Phones</h2>
                    <p className="text-xl text-slate-500">{phone}</p>
                </div>
            </div>

                <div>
                   <div>
                   <h2 className="text-2xl bold">Address</h2>
                    <p className="text-xl text-slate-500">{street}</p>
                   </div>

                   <div>
                        <h2 className="text-2xl bold">Zipcode</h2>
                        <p className="text-xl text-slate-500">{zipcode}</p>
                    </div>

                    <div>
                        <h2 className="text-2xl bold">Website</h2>
                        <p className="text-xl text-slate-500">{website}</p>
                    </div> 
                    <div>
                        <h2 className="text-2xl bold">City</h2>
                        <p className="text-xl text-slate-500">{city}</p>
                    </div>
                </div>

                <div>
                    <div>
                        <h2 className="text-2xl bold">bs</h2>
                        <p className="text-xl text-slate-500">{bs}</p>
                    </div>

                    <div>
                        <h2 className="text-2xl bold">CatchPhrase</h2>
                        <p className="text-xl text-slate-500">{catchPhrase}</p>
                    </div>
                    <div>
                        <h2 className="text-2xl bold">Lat</h2>
                        <p className="text-xl text-slate-500">{lat}</p>
                    </div>
                    <div>
                        <h2 className="text-2xl bold">Ing</h2>
                        <p className="text-xl text-slate-500">{lng}</p>
                    </div>
                </div>

            </div>
            </div>
        
      
        </div>
    );
};

export default CardItem;