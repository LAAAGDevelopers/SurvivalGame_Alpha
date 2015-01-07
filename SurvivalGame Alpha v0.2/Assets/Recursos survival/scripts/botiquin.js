#pragma strict
private var survivalScript : Survivalcontroller;

function Start ()
{
    survivalScript = GameObject.Find("First Person Controller").GetComponent(Survivalcontroller);
}

function OnTriggerStay (Col : Collider)
{
    if( (Col.tag == "Player") && (Input.GetKey(KeyCode.E)) )
    {
        Destroy(gameObject);
        survivalScript.currentHealth += 25;
        
    }
}