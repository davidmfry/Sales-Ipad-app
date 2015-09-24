// Gets the list of devices and prints them to the console.


var webcamTexture : WebCamTexture;

function Start () 
{
    //Shows a list of Camera Devices
    var devices : WebCamDevice[] = WebCamTexture.devices;
    
    /*for( var i = 0 ; i < devices.length ; i++ )
        Debug.Log(devices[i].name);*/
        
    webcamTexture = WebCamTexture();
    /*renderer.material.mainTexture = webcamTexture;
    renderer.material.shader = Shader.Find("Unlit/Texture");*/       
}

function PlayVideo()
{
	renderer.material.mainTexture = webcamTexture;
    renderer.material.shader = Shader.Find("Unlit/Texture");
	webcamTexture.Play();
}

function PauseVideo()
{
	webcamTexture.Pause();
}

function StopVideo()
{
	webcamTexture.Stop();
}