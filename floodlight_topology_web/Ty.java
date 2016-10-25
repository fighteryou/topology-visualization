package net.floodlightcontroller.topology.web;

import java.io.IOException;

import org.openflow.util.HexString;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

public class Ty extends JsonSerializer<Typelink>{

	@Override
	public void serialize(Typelink lwt, JsonGenerator jgen,
			SerializerProvider arg2) throws IOException,
			JsonProcessingException {
		// TODO Auto-generated method stub
		jgen.writeStartObject();
        jgen.writeStringField("src_switch", lwt.src_switch);
        jgen.writeNumberField("src_port", lwt.src_port);
        jgen.writeStringField("dst_switch", lwt.dst_switch);
        jgen.writeNumberField("dst_port", lwt.dst_port);
        jgen.writeStringField("type", lwt.type);
        jgen.writeStringField("direction", lwt.direction);
        jgen.writeEndObject();
		
	}

}
