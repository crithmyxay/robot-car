//www.elegoo.com

#define ENA 5 // left motor speed
#define ENB 6 // right motor speed
#define IN1 7 // left front wheel
#define IN2 8 // left rear wheel
#define IN3 9 //right rear wheel
#define IN4 11 // right front wheel
#define LED 13

unsigned char carSpeed = 200;
bool state = LOW;
char getstr;

void forward(){ 
  digitalWrite(ENA,HIGH);
  digitalWrite(ENB,HIGH);
  digitalWrite(IN1,HIGH);
  digitalWrite(IN2,LOW);
  digitalWrite(IN3,LOW);
  digitalWrite(IN4,HIGH);
  Serial.println("Forward");
  Serial.flush();
}

void forwardLeft(){ 
  digitalWrite(ENA,HIGH);
  digitalWrite(ENB,LOW);
  digitalWrite(IN1,HIGH);
  digitalWrite(IN2,LOW);
  digitalWrite(IN3,LOW);
  digitalWrite(IN4,LOW);
  Serial.println("Left Forward");
  Serial.flush();
}

void forwardRight(){ 
  digitalWrite(ENA,LOW);
  digitalWrite(ENB,HIGH);
  digitalWrite(IN1,LOW);
  digitalWrite(IN2,LOW);
  digitalWrite(IN3,LOW);
  digitalWrite(IN4,HIGH);
  Serial.println("Right Forward");
  Serial.flush();
}

void back(){
  digitalWrite(ENA,HIGH);
  digitalWrite(ENB,HIGH);
  digitalWrite(IN1,LOW);
  digitalWrite(IN2,HIGH);
  digitalWrite(IN3,HIGH);
  digitalWrite(IN4,LOW);
  Serial.println("Back");
  Serial.flush();
}

void backLeft(){
  digitalWrite(ENA,HIGH);
  digitalWrite(ENB,LOW);
  digitalWrite(IN1,LOW);
  digitalWrite(IN2,HIGH);
  digitalWrite(IN3,LOW);
  digitalWrite(IN4,LOW);
  Serial.println("Left Back");
  Serial.flush();
}

void backRight(){
  digitalWrite(ENA,LOW);
  digitalWrite(ENB,HIGH);
  digitalWrite(IN1,LOW);
  digitalWrite(IN2,LOW);
  digitalWrite(IN3,HIGH);
  digitalWrite(IN4,LOW);
  Serial.println("Right Back");
  Serial.flush();
}

void left(){
  analogWrite(ENA,carSpeed);
  analogWrite(ENB,carSpeed);
  digitalWrite(IN1,LOW);
  digitalWrite(IN2,HIGH);
  digitalWrite(IN3,LOW);
  digitalWrite(IN4,HIGH); 
  Serial.println("Left");
  Serial.flush();
}

void right(){
  analogWrite(ENA,carSpeed);
  analogWrite(ENB,carSpeed);
  digitalWrite(IN1,HIGH);
  digitalWrite(IN2,LOW);
  digitalWrite(IN3,HIGH);
  digitalWrite(IN4,LOW);
  Serial.println("Right");
  Serial.flush();
}

void stop(){
  digitalWrite(ENA,LOW);
  digitalWrite(ENB,LOW);
  Serial.println("Stop!");
  Serial.flush();
}

void stateChange(){
  state = !state;
  digitalWrite(LED, state);
  Serial.println("Light");
  Serial.flush();
}

void setup() { 
  Serial.begin(9600);
  pinMode(LED, OUTPUT); 
  pinMode(IN1,OUTPUT);
  pinMode(IN2,OUTPUT);
  pinMode(IN3,OUTPUT);
  pinMode(IN4,OUTPUT);
  pinMode(ENA,OUTPUT);
  pinMode(ENB,OUTPUT);
  stop();
}

void loop() { 
  getstr = Serial.read();
  switch(getstr){
    case 'w': forward(); break;
    case 's': back();   break;
    case 'a': left();   break;
    case 'd': right();  break;
    case 'e': stop();   break;
    case 'q': stateChange(); break;
    default:  break;
  }
}


