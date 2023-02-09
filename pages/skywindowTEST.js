
export default function skyWindow () {
    return (
        <div>
            Sky Window API test #1: <br/>
            <iframe src='http://server1.sky-map.org/skywindow?object=M100&zoom=8&img_source=SDSS' width={500} height={500} >
            </iframe>
            <br/>

            Sky Window API Test #2: <br/>
            <table width={400} border={1} >
                <tr>
                    <td>
                        <font color={"gray"} size={-1}>
                        The coordiantes of the center of this image are:<br />
                            Right ascension = 00h 42m 32s<br />
                            Declination = 41° 19' 53"<br />
                        This image is generated automatically by sky-map.org server. 
                        Ellipses on the image show the approximate positions of galaxies. 
                        Big ellipse in the center of the image shows the 
                        </font>
                        <font color={"black"} size={-1}>
                            Andromeda Galaxy M31
                        </font>
                    </td>
                </tr>
                <tr>
                    <td>
                        <iframe src="http://server1.sky-map.org/skywindow?ra=004232&de=411953&zoom=4" width={400} height={320}>
                        </iframe>
                    </td>
                </tr>
            </table>
        </div>
    )

}