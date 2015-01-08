#pragma strict

private var survivalScript : Survivalcontroller;

function Start () 
{
	survivalScript = GameObject.Find("muneco5").GetComponent(Survivalcontroller);
}

function OnTriggerStay (Col : Collider)
{
    if( (Col.tag == "Player") && (Input.GetKey(KeyCode.E)) )
    {
        Destroy(gameObject);
        survivalScript.currentThirst += 25;
        
    }
}