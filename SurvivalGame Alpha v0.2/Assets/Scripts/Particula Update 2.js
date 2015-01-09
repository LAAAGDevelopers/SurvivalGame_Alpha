#pragma strict
var dist : float = 3.0;//The distance from where the particles atracts - La distancia dessde la cual las particulas se atraen.
private var trans : Vector3;//(trans-transform) The position of this object - La posicion de este objeto
private var trans2 : Vector3;//The position of the other particles - La posicion de las otras particulas
private var otro : GameObject[];//The array that contains the game objects with tag "Particula" - El arreglo que contiene los objetos con etiqueta "Particula"
private var Long : int;//The legth of the previous array - El largo del arreglo anterior
function Update(){
	otro = GameObject.FindGameObjectsWithTag("Player");//"otro" is equal to it, so the scrip hasn't to do it twice - "otro" el igualado a esto, asi el script no debe hacerlo dos veces
	Long = otro.Length;
	for(var a : int = 0; a < Long; a++){
		trans = otro[a].transform.position;//"trans" is equal to the position of this object. So the script does it once and not twice - "trans" es igualado a la posicion del objeto. Asi el script hace esto una vez y no dos
		for(var i : int = 0; i < Long; i++){
			trans2 = otro[i].transform.position;//The same as "trans" but with the position of the other objects - Lo mismo que "trans" pero con la posicion de los otros objetos
			if((Vector3.Distance(trans, trans2)) < dist && a != i){//If the distance between objects is less than dist... - Si la distancia entre objetos es menor que dist...
				otro[i].rigidbody.AddForce(trans - trans2);//...it adds a force in the irection of the other object - ...agrega una fuerza e direccion al otro objeto
			}
		}
	}
}
