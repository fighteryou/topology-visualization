package net.floodlightcontroller.topology.web;

import java.io.IOException;

import org.openflow.util.HexString;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

public class GJ extends JsonSerializer<GetJsonCS>{

	@Override
	public void serialize(GetJsonCS cs, JsonGenerator jgen,
			SerializerProvider arg2) throws IOException,
			JsonProcessingException {
		// TODO Auto-generated method stub
		jgen.writeStartObject();
        jgen.writeStringField("ControllerIp", cs.ControllerIp);
        jgen.writeArrayFieldStart("switchDPID");
            while(cs.switchDPID.hashCode(i)==true)
        jgen.writeStringField("dpid", cs.switchDPID[i]);
        jgen.writeEndArray();
        jgen.writeEndObject();
		
	}

}
