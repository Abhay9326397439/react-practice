function User({name,textColor,backGroundColor}){ 
return (
    <>
            <h1 style={{ color: textColor }}>
                Hello {name} is here
            </h1>

            <div>
                <h1 style={{ backgroundColor: backGroundColor }}>
                    Hello {name} is here
                </h1>
            </div>
        </>
);
}

export default User;